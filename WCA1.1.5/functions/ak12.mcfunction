scoreboard objectives add ak12 dummy
scoreboard players add @s[m=!c] ak12 1

execute at @s[scores={ak12=31..10000}] run event entity @s gun:empty