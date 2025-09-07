scoreboard objectives add pkp_zenit dummy
scoreboard players add @s[m=!c] pkp_zenit 1
scoreboard players add @s[m=!c] pkp_zenit_lenta 1

execute at @s[scores={pkp_zenit=101..10000}] run event entity @s gun:empty
