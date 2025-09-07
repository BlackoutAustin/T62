scoreboard objectives add m249pip dummy
scoreboard players add @s[m=!c] m249pip 1
scoreboard players add @s[m=!c] m249pip_lenta 1

execute at @s[scores={m249pip=101..10000}] run event entity @s gun:empty
