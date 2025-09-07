import { world, system } from '@minecraft/server';

const armorClass = {
  "addon:6b45": { "armor": 0.2 },
  "addon:6b2": { "armor": 0.9 },
};

const bullets = {
  "addon:5.45x39_bullet": { "damage": 18, "headshotMultiplier": 2 },
  "addon:9x39_bullet": { "damage": 20, "headshotMultiplier": 2 },
  "addon:7.62x54_bullet_mg_trasser": { "damage": 35, "headshotMultiplier": 3 },
  "addon:7.62x54_bullet_mg": { "damage": 35, "headshotMultiplier": 3 },
  "addon:7.62x54_bullet": { "damage": 100, "headshotMultiplier": 3 },
  // ... остальные типы пуль
};
world.afterEvents.projectileHitBlock.subscribe(ev => {
  const proj = ev.projectile;
  if (!proj) return;

  const projId = proj.typeId;
  if (!bullets[projId]) return;

  // Создаем партиклы при попадании в блок
  const location = ev.location;
  system.run(() => {
    world.getDimension("overworld").runCommandAsync(`particle minecraft:basic_smoke_particle ${location.x} ${location.y} ${location.z}`);  
    world.getDimension("overworld").runCommandAsync(`particle addon:hit_dim ${location.x} ${location.y} ${location.z}`);
    world.getDimension("overworld").runCommandAsync(`playsound addon.hit @a ${location.x} ${location.y} ${location.z} 100 1`);
  });
});
world.afterEvents.projectileHitEntity.subscribe(ev => {
  const proj = ev.projectile;
  if (!proj) return;

  const source = ev.source;
  const projId = proj.typeId;
  const entity = ev.getEntityHit()?.entity;
  
  if (!entity || !entity.isValid || !bullets[projId]) return;

  // Проверка на хедшот (попадание в голову)
  const hitLocation = entity.hitLocation;
  
  let damage = bullets[projId].damage;
  const location = ev.location;

  // Применяем множитель хедшота
  if (location.y > entity.location.y + 1.5) {
    damage *= 10;
  }
  else if (location.y < entity.location.y + 0.5) {
    damage *= 0.1;
  }

  // Применяем модификаторы брони
  if (entity.hasTag("vehicle")) {
    damage *= 0;
  } else if (entity.hasTag("br3") && !entity.hasTag("vehicle")) {
    damage *= 0.3;
  } else if (entity.hasTag("br2") && !entity.hasTag("vehicle")) {
    damage *= 0.6;
  } else if (entity.hasTag("br1") && !entity.hasTag("vehicle")) {
    damage *= 0.8;
  }

  // Наносим урон
  system.run(() => {
    entity.runCommandAsync(`damage @s[c=1] ${Math.round(damage)} self_Destruct`);
    
  });
});