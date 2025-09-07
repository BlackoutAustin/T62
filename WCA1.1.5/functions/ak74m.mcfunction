scoreboard objectives add ak74m dummy
scoreboard players add @s[m=!c] ak74m 1

execute at @s[scores={ak74m=31..10000}] run event entity @s gun:empty