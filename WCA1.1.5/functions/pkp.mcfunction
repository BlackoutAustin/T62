scoreboard objectives add pkp dummy
scoreboard players add @s[m=!c] pkp 1
scoreboard players add @s[m=!c] pkp_lenta 1

execute at @s[scores={pkp=101..10000}] run event entity @s gun:empty
