scoreboard objectives add tigr_m_kord dummy
scoreboard players add @e[type=addon:tigr_m_turret,c=1,r=2] tigr_m_kord 1

execute at @e[type=addon:tigr_m_turret,c=1,r=2,scores={tigr_m_kord=50..10000}] run replaceitem entity @p[hasitem={item=addon:tigr_m_kord_fire}] slot.weapon.mainhand 0 air