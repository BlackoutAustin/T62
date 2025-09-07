scoreboard objectives add ak74 dummy
scoreboard players add @s[m=!c] ak74 1

execute at @s[scores={ak74=31..10000}] run event entity @s gun:empty