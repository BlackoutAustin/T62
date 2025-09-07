import { system, world, ItemComponentTypes } from "@minecraft/server";

const config = {
  "addon:pkm_mag_empty": { // Предмет который будет чиниться.
    "mag": "addon:ammo7.62x54", // Магазин который будет чинить.
    "fix": 1 // Стоимость починки.
  }
}

function hasItem(player, itemType) {
  const inventory = player.getComponent("inventory").container;
  for (let i = 0; i < inventory.size; i++) {
    const item = inventory.getItem(i);
    if (item && item.typeId === itemType) {
      return true;
    }
  }
  return false;
}
world.beforeEvents.itemUse.subscribe((event) => {
  const player = event.source;
  const itemStack = event.itemStack;
  const item = config[itemStack.typeId];

  if (item) {
    const stickIndex = hasItem(player, item.mag);

    const currentDurability = itemStack.getComponent(ItemComponentTypes.Durability).damage;
    const fix = currentDurability - item.fix;

    system.run(() => {
      if (stickIndex && currentDurability !== 0 && currentDurability !== 1) {
        player.runCommand(`clear @s ${item.mag} 0 1`);
        player.runCommand(`replaceitem entity @s slot.weapon.mainhand 0 ${itemStack.typeId} 1 ${fix}`);
        player.runCommand(`playsound addon.patron @a ^^^0.10 1 1`);
      }
      if (stickIndex && currentDurability === 0) {
        player.runCommand(`clear @s ${item.mag} 0 1`);
        player.runCommand(`replaceitem entity @s slot.weapon.mainhand 0 ${itemStack.typeId} 1 99`);
        player.runCommand(`playsound addon.patron @a ^^^0.10 1 1`);
      }
      if (stickIndex && currentDurability === 1) {
        player.runCommand(`clear @s ${item.mag} 0 1`);
        player.runCommand(`replaceitem entity @s slot.weapon.mainhand 0 addon:pkm_mag 1`);
        player.runCommand(`playsound addon.patron @a ^^^0.10 1 1`);
      }
    });
  }
});