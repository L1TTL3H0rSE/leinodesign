# Полка — ревизия A

Начало: 2026-09-08 00:27:27 UTC. Дизайн и QA: 2026-09-08 00:35:46 UTC. Готовность evidence: 2026-09-08 00:37:01 UTC.

- [list](https://www.figma.com/design/1uRCzGX2sEXpYQ2Un4sm5S?node-id=9-17) — 1280 × 748; list.png
- [detail](https://www.figma.com/design/1uRCzGX2sEXpYQ2Un4sm5S?node-id=9-18) — 1280 × 512; detail.png
- [edit](https://www.figma.com/design/1uRCzGX2sEXpYQ2Un4sm5S?node-id=9-19) — 520 × 488; edit.png
- [empty](https://www.figma.com/design/1uRCzGX2sEXpYQ2Un4sm5S?node-id=12-63) — 1280 × 528; empty.png
- [error](https://www.figma.com/design/1uRCzGX2sEXpYQ2Un4sm5S?node-id=12-123) — 520 × 496; error.png
- [note](https://www.figma.com/design/1uRCzGX2sEXpYQ2Un4sm5S?node-id=18-93) — 1280 × 436; note.png
- [compact](https://www.figma.com/design/1uRCzGX2sEXpYQ2Un4sm5S?node-id=18-111) — 760 × 832; compact.png

Навигация изменена на «Библиотека». Добавлены заметка и её чтение без PDF, размера файла и скачивания. Список 760 px использует те же компоненты. Изменено только указанное название PDF; три других названия и описание PDF проверены без изменений. Ошибка редактирования по-прежнему показывает пустое название.

В Chrome проверены компактный список → заметка → возврат к компактному списку; PDF → обновлённый просмотр → обновлённая модалка. Все семь финальных PNG просмотрены. Структурная проверка переполнений пуста; все текстовые слои Inter; after-*.json получены частями и проверены JSON.parse. 18 хешей frozen initial совпали.

Самокоррекции evidence: обнаружена обрезка внутреннего JSON в before-inventory.json; финальная выгрузка заменена на проверенные чанки по 20 узлов. Точные before/after значений — before-after-values.json, исходные изображения — before-*.png. Обнаружен отсутствующий error.png после пакетного скачивания; повторно выгружен и проверен. Замороженная initial не редактировалась.

Ограничения: исходного PDF/URL нет, поэтому прежнее действие открытия PDF не подключено к реальному файлу. Поиск и редактирование — фиксированные состояния прототипа. Браузерные снимки доступны в журнале CUA, локальные PNG получены непосредственно из Figma. before-inventory.json не является полным валидным внутренним инвентарём.

