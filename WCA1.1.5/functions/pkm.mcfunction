scoreboard objectives add pkm dummy
scoreboard players add @s[m=!c] pkm 1
scoreboard players add @s[m=!c] pkm_lenta 1

execute at @s[scores={pkm=101..10000}] run event entity @s gun:empty
