import { world, system } from "@minecraft/server";

world.beforeEvents.worldInitialize.subscribe(ev => {
	ev.blockComponentRegistry.registerCustomComponent("addon:svet", { 
		"onTick": event => {
			const location = event.block.location;
			event.block.dimension.setBlockType(location, "minecraft:air");
		}
	});
});