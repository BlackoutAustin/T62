scoreboard objectives add m21 dummy
scoreboard players add @s[m=!c] m21 1

execute at @s[scores={m21=21..10000}] run event entity @s gun:empty