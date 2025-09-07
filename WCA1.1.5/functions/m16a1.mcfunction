scoreboard objectives add m16a1 dummy
scoreboard players add @s[m=!c] m16a1 1

execute at @s[scores={m16a1=31..10000}] run event entity @s gun:empty