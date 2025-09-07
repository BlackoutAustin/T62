scoreboard objectives add asval dummy
scoreboard players add @s[m=!c] asval 1

execute at @s[scores={asval=21..10000}] run event entity @s gun:empty