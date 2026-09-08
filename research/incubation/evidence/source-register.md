# Реестр источников

Все ссылки R ведут на **один commit**, а не на подвижную ветку. Git blob IDs — в [source-manifest.json](source-manifest.json). Числа строк относятся к этому commit. В текущей рабочей копии строки могут сдвинуться.

## Уровни evidence

- **Recorded incident:** Haulplane явно записал произошедший сбой/переделку. Это достаточное основание для негативного сценария, но не для утверждения, что исправление независимо принято.
- **Local gate experiment:** алгоритм ворот был испытан на подставленных объектах. Подтверждает дефект проверки, не состояние живой Figma.
- **Reference observation:** факт о сторонней системе сохранён внутри Haulplane. Не считать её испытанием нашего пилота или всех design systems.
- **Normative / proposed:** инструкция или требование будущей проверки. Не превращать в наблюдавшийся сбой.
- **Supplementary session:** исторический вывод инструмента/отчёт из связанной задачи Haulplane. Уточняет инцидент; не замещает репозиторий и не подтверждает текущее состояние Figma.

## Источники репозитория

| ID | Источник | Что даёт |
|---|---|---|
| R-01 | [SKILL.md](https://github.com/haulplane/platform/blob/7fa5718e9be43a2384250538498c540fa0db1ac7/.agents/skills/figma-design-system/SKILL.md) | Живой entrypoint; этапы, полномочия, сценарии A/B/C, три группы evidence. Сам по себе не журнал успешного исполнения |
| R-02 | [design-direction.md, 96–148](https://github.com/haulplane/platform/blob/7fa5718e9be43a2384250538498c540fa0db1ac7/docs/frontend/design-direction.md#L96-L148) | Непринятая первая проба, product copy leak; перенос экранов не завершён; Button частичный; независимая DX и полная UX/DX открыты |
| R-03 | [AGENT_ROUTING_NOTES.md, 83–104](https://github.com/haulplane/platform/blob/7fa5718e9be43a2384250538498c540fa0db1ac7/docs/AGENT_ROUTING_NOTES.md#L83-L104) | Переделка ограничений boundary; в строке 100 — скрытие Slot, двойной gap, высота без текста, loader при resize, непрозрачный фон Slot. Это итог root, без полного before/after дампа |
| R-04 | [component-contract.md, 74–100](https://github.com/haulplane/platform/blob/7fa5718e9be43a2384250538498c540fa0db1ac7/.agents/skills/figma-design-system/references/component-contract.md#L74-L100) и [243–277](https://github.com/haulplane/platform/blob/7fa5718e9be43a2384250538498c540fa0db1ac7/.agents/skills/figma-design-system/references/component-contract.md#L243-L277) | Операции потребителя и slot/fallback contract; отсутствие type в d.ts не равно отсутствию API. Нормативный источник |
| R-05 | [Button.vue, 103–112](https://github.com/haulplane/platform/blob/7fa5718e9be43a2384250538498c540fa0db1ac7/frontend/packages/components/src/components/Button.vue#L103-L112) | Исполняемый контракт: custom side заменяет fallback; v-if sideIcon находится внутри fallback; отдельного Vue prop ShowSide нет |
| R-06 | [design-method.md, 268–330](https://github.com/haulplane/platform/blob/7fa5718e9be43a2384250538498c540fa0db1ac7/.agents/skills/figma-design-system/references/design-method.md#L268-L330) | Local/private/public; common/local edits; независимая DX-проба и отдельно доменная UX-проверка. Это условия приёмки, не результаты |
| R-07 | [design-method.md, 56–100](https://github.com/haulplane/platform/blob/7fa5718e9be43a2384250538498c540fa0db1ac7/.agents/skills/figma-design-system/references/design-method.md#L56-L100) | Конкретные примеры текста из пробы и граница служебных аннотаций |
| R-08 | [quality-gate.md, 517–555](https://github.com/haulplane/platform/blob/7fa5718e9be43a2384250538498c540fa0db1ac7/.agents/skills/figma-design-system/references/quality-gate.md#L517-L555) и [752–772](https://github.com/haulplane/platform/blob/7fa5718e9be43a2384250538498c540fa0db1ac7/.agents/skills/figma-design-system/references/quality-gate.md#L752-L772) | Локальные испытания, type-only Slot check и реально проходившие дефектные состояния ворот. Полный нынешний suite в этом исследовании не запускался |
| R-09 | [file-and-docs.md, 3–19](https://github.com/haulplane/platform/blob/7fa5718e9be43a2384250538498c540fa0db1ac7/.agents/skills/figma-design-system/references/file-and-docs.md#L3-L19) | Разделение библиотеки и продукта действует также для черновиков; точная политика файлов Haulplane |
| R-10 | [principles.md, 180–206](https://github.com/haulplane/platform/blob/7fa5718e9be43a2384250538498c540fa0db1ac7/.agents/skills/figma-design-system/references/principles.md#L180-L206) | У локально пересобранного Menu-desktop разошёлся состав пунктов; доля инстансов не measure качества boundary |
| R-11 | [kosygin-evidence.md](https://github.com/haulplane/platform/blob/7fa5718e9be43a2384250538498c540fa0db1ac7/.agents/skills/figma-design-system/references/kosygin-evidence.md) | Зафиксированные сторонние наблюдения: SLOT vs FRAME, пустые descriptions, токены, масштабирование, Properties drift; раздел E — неизвестное |
| R-12 | [tokens.md](https://github.com/haulplane/platform/blob/7fa5718e9be43a2384250538498c540fa0db1ac7/.agents/skills/figma-design-system/references/tokens.md) | Засев / поддержка, ONLY, accepted.json, scopes, codeSyntax, имена и SCSS extraction. Это рецепт; полного живого цикла приёмки/отката пока нет |
| R-13 | [docs/figma/README.md](https://github.com/haulplane/platform/blob/7fa5718e9be43a2384250538498c540fa0db1ac7/docs/figma/README.md) | not captured; библиотека не публиковалась; частичного snapshot ещё нет. Ключ файла не означает готовность или принятие |
| R-14 | [ADR-0012](https://github.com/haulplane/platform/blob/7fa5718e9be43a2384250538498c540fa0db1ac7/docs/decisions/0012-figma-storybook-first.md) и [components-package.md](https://github.com/haulplane/platform/blob/7fa5718e9be43a2384250538498c540fa0db1ac7/docs/frontend/components-package.md) | Product presentation shape разрешён в Vue-пакете. Разделение Figma-файлов НЕ означает запрет product composition в кодовом packages/components |
| R-15 | [screens.md](https://github.com/haulplane/platform/blob/7fa5718e9be43a2384250538498c540fa0db1ac7/.agents/skills/figma-design-system/references/screens.md) | max-width semantics, явные ширины, local inventory для ревью, отсутствие квоты инстансов; параметры привязаны к Haulplane |
| R-16 | [AGENT_ORCHESTRATION.md](https://github.com/haulplane/platform/blob/7fa5718e9be43a2384250538498c540fa0db1ac7/docs/AGENT_ORCHESTRATION.md) | Провайдеры, модели, делегирование, авторизация и формат приёмки. Не design-system core |

## Дополнительное свидетельство сессии

[session-excerpts.json](session-excerpts.json) содержит семь коротких записей из задачи «Проверить Figma-инструкции», ID `01a07725-9ecf-7103-a3a3-2dce9f50e931`. Оригинальный путь, JSONL line и timestamp сохранены в каждой записи. Не копировалась вся история или медиа референса.

| ID | JSONL line | Наблюдение / предел |
|---|---:|---|
| S-01 | 2495, 2519 | Fallback при ShowSideIcon сохранил 26×18 и в shown, и в hidden. Это историческая геометрия конкретного мастера |
| S-02 | 2632 | Последующий workaround ShowSide скрывал весь Slot; 92 → 66 px. Это **не достаточный pass** E-01: нельзя потерять custom content ради устранения пустого места |
| S-03 | 3069, 3074 | Отчёт о неверно видимом CSV и дамп: слот белый, текст CSV тоже белый, ребёнок находится внутри Slot. Подтверждает fill defect, НЕ ownership defect |
| S-04 | 1765 | Попытка expose instance внутри Slot завершилась ошибкой инструмента. Не доказывает, что пользователь вынужден detach; canvas-редактирование Slot остаётся отдельным штатным путём |
| S-05 | 3244 | Автор признал разрешённое им исключение: продуктовая проба в библиотеке ради неопубликованных компонентов. Репозиторий R-02/R-09 закрепил коррекцию |

Дата в записях сессии хранится в UTC, дата пилота в документах — по локальному дню; не смешивать их при реконструкции последовательности.

## Ограничения исследования

Новых экспериментов в Figma, frontend/Storybook прогонов, изменения masters и consumer operations здесь нет. На исходном commit в exports был только README, поэтому готовый воспроизводимый пакет before/after снимков из него извлечь нельзя. Сессионные отчёты и записанные root-переделки дают сценарии; screenshot fixtures и независимое повторение остаются blocker.

Отсутствие инцидента в этом реестре означает «не найден в проверенных источниках», а не «никогда не случался». Доступные данные не позволяют объявить generic метод portable или qualified.
