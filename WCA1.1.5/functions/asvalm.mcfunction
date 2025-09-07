scoreboard objectives add asvalm dummy
scoreboard players add @s[m=!c] asvalm 1

execute at @s[scores={asvalm=21..10000}] run event entity @s gun:empty