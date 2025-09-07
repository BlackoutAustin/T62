scoreboard objectives add ak74m_zenit dummy
scoreboard players add @s[m=!c] ak74m_zenit 1

execute at @s[scores={ak74m_zenit=31..10000}] run event entity @s gun:empty