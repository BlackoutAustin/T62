scoreboard objectives add m240b dummy
scoreboard players add @s[m=!c] m240b 1
scoreboard players add @s[m=!c] m240b_lenta 1

execute at @s[scores={m240b=51..10000}] run event entity @s gun:empty
