scoreboard objectives add m110 dummy
scoreboard players add @s[m=!c] m110 1

execute at @s[scores={m110=21..10000}] run event entity @s gun:empty