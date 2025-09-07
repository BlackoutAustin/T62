scoreboard objectives add svds dummy
scoreboard players add @s[m=!c] svds 1

execute at @s[scores={svds=11..10000}] run event entity @s gun:empty