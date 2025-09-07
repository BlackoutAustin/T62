scoreboard objectives add m4a1 dummy
scoreboard players add @s[m=!c] m4a1 1

execute at @s[scores={m4a1=31..10000}] run event entity @s gun:empty