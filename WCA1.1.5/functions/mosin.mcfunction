scoreboard objectives add mosin dummy
scoreboard players add @s[m=!c] mosin 1

execute at @s[scores={mosin=5..10000}] run event entity @s gun:empty