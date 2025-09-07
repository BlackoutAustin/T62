scoreboard objectives add m16a4 dummy
scoreboard players add @s[m=!c] m16a4 1

execute at @s[scores={m16a4=31..10000}] run event entity @s gun:empty