scoreboard objectives add svd dummy
scoreboard players add @s[m=!c] svd 1

execute at @s[scores={svd=11..10000}] run event entity @s gun:empty