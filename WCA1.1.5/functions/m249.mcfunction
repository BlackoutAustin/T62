scoreboard objectives add m249 dummy
scoreboard players add @s[m=!c] m249 1
scoreboard players add @s[m=!c] m249_lenta 1

execute at @s[scores={m249=101..10000}] run event entity @s gun:empty
