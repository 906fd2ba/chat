# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

## Deployed on Github Pages
https://906fd2ba.github.io/chat/

## Версии
- Основа на ветке `main` - чаты независимы друг от друга, не видят стейты друг друга, надо слушать ивент, чтобы получать новые сообщения, все как в реальных чатах (задеплоено)
- Версия без эмуляции ивентов и независимых чатов на ветке `no_useEvents` (меньше кода, но смысл эмуляции теряется, получается мы просто напрямую читаем стейт)
- Версия без стора и независимых чатов на ветке `no_store`

## Поддержка
Рекомендуется использовать только современные браузеры последних версий, т.к. в проекте используется CSS Nesting и другие современные технологии.

![preview](/docs/images/chat.png)
