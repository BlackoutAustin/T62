scoreboard objectives add akms dummy
scoreboard players add @s[m=!c] akms 1

execute at @s[scores={akms=31..10000}] run event entity @s gun:empty