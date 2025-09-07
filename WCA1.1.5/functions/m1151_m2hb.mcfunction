scoreboard objectives add m1151_m2hb dummy
scoreboard players add @e[type=addon:m1151_turret,c=1,r=2] m1151_m2hb 1

execute at @e[type=addon:m1151_turret,c=1,r=2,scores={m1151_m2hb=200..10000}] run replaceitem entity @p[hasitem={item=addon:m1151_m2hb_fire}] slot.weapon.mainhand 0 air