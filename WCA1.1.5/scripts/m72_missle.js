import { world, system } from '@minecraft/server';

const armorClass = {
  "addon:6b45": { "armor": 0.2 },
  "addon:6b2": { "armor": 0.9 },
};

const bullets = {
  "addon:m72_missle": { "damage": 5000000, "headshotMultiplier": 2 },
};
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

  // Наносим урон
  system.run(() => {
    entity.runCommandAsync(`damage @s[c=1] ${Math.round(damage)} self_Destruct`);
    entity.runCommandAsync(`particle addon:babah_vog ~~0.5~`);
    entity.runCommandAsync(`particle addon:vog_dim`);
    entity.runCommandAsync(`particle addon:vog_dim2`);
    entity.runCommandAsync(`playsound addon.kontuziya @a[r=5.5]`);
    entity.runCommandAsync(`playsound addon.gp25_babah @a[r=300]`);
    entity.runCommandAsync(`effect @a[r=4] slowness 3 1 true`);
    entity.runCommandAsync(`effect @a[r=4] blindness 3 1 true`);
    entity.runCommandAsync(`camerashake add @a[r=5.5] 0.5 0.5 rotational`);
    
  });
});