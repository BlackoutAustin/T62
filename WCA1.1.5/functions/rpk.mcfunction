scoreboard objectives add rpk dummy
scoreboard players add @s[m=!c] rpk 1

execute at @s[scores={rpk=76..10000}] run event entity @s gun:empty