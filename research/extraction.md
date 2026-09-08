# Что перенесено и почему

LeinoDesign — отдельный экспериментальный черновик по явному поручению
владельца. Он не заменяет operational skill Haulplane. Предложенные в старом
архиве freeze-gates — часть исследования, а не инструкции текущему исполнителю.

## Источники

- Исходный архив сохранён без изменения содержимого в [incubation](incubation/INDEX.md).
  Его baseline: `7fa5718e9be43a2384250538498c540fa0db1ac7`.
- Актуальные исходники прочитаны из Haulplane на
  `a2ff95baf34f877ea83fb3557f6b040a7ddc8382`.
  Точные файлы, Git blob IDs и SHA-256 — в [source-manifest.json](source-manifest.json).
- Пользователь сообщил об улучшении визуального результата, использования
  Figma и самостоятельных проверок, о меньшем числе напоминаний о компонентах.
  Это качественная оценка владельца, не измеренная статистика.
- В текущей беседе выполнен read-only осмотр предоставленных файлов:
  [Haulplane Modal](https://www.figma.com/design/pqnreXdAiNlaZYdzaQz8Vb?node-id=51-6),
  [Munchkin Sheets](https://www.figma.com/design/bmxy6z3Z0bBLHLYryYJYrP?node-id=112-66).
  Haulplane имеет native slots и содержательные instance-примеры. Munchkin
  тоже использует компоненты и токены; нельзя описывать его как отсутствие
  компонентности. Разные задачи и даты не позволяют изолировать вклад харнесса.

## Карта правил

Все ссылки ниже закреплены на прочитанной ревизии, а не на текущей ветке.

| Источник | Решение LeinoDesign | Что не переносится |
|---|---|---|
| [design-method: задача, текст и иерархия](https://github.com/haulplane/platform/blob/a2ff95baf34f877ea83fb3557f6b040a7ddc8382/.agents/skills/figma-design-system/references/design-method.md#L25) | Начать с решения пользователя; разграничить product copy и заметки; проверить смысловой приоритет | Dispatcher grammar, обязательные 3–5 вопросов, 1:1 вопрос–зона, 3+1 уровня |
| [design-method: границы и DX](https://github.com/haulplane/platform/blob/a2ff95baf34f877ea83fb3557f6b040a7ddc8382/.agents/skills/figma-design-system/references/design-method.md#L268) | Common/local edit определяют полезность границы; фактическая consumer-проба | Автоматическое требование общего shell или публичности всех повторений |
| [component-contract](https://github.com/haulplane/platform/blob/a2ff95baf34f877ea83fb3557f6b040a7ddc8382/.agents/skills/figma-design-system/references/component-contract.md) | Режим работы, семантический перевод свойств, native slots, независимые состояния, проверка clone | Vue props, размеры, частная матрица Button, выбранный источник иконок |
| [quality-gate](https://github.com/haulplane/platform/blob/a2ff95baf34f877ea83fb3557f6b040a7ddc8382/.agents/skills/figma-design-system/references/quality-gate.md#L22) | Проверять конкретное ожидание каждого варианта; bad/good controls; пустое не PASS | Большой JS runner, SCSS parser и его проектные manifests |
| [design-method: контекст снимка](https://github.com/haulplane/platform/blob/a2ff95baf34f877ea83fb3557f6b040a7ddc8382/.agents/skills/figma-design-system/references/design-method.md#L510) | Родительский контекст для clipping/фона/эффектов, детали 1:1, повтор того же снимка | Фиксированные 1440/1920 и конкретная геометрия страницы документации |
| [design-direction: новые исправления](https://github.com/haulplane/platform/blob/a2ff95baf34f877ea83fb3557f6b040a7ddc8382/docs/frontend/design-direction.md#L125) | Literal zero; фактический paint; Header+Close; центр рисунка; ограничения устойчивости focus | Выдача исправлений владельца за самостоятельные находки агента |
| [file-and-docs](https://github.com/haulplane/platform/blob/a2ff95baf34f877ea83fb3557f6b040a7ddc8382/.agents/skills/figma-design-system/references/file-and-docs.md) | Владение артефактом не меняется ради доступа инструмента; Properties из definitions | Ровно два файла, эмодзи, меню страниц, панель определённого вида |
| [screens: переиспользование](https://github.com/haulplane/platform/blob/a2ff95baf34f877ea83fb3557f6b040a7ddc8382/.agents/skills/figma-design-system/references/screens.md#L137) | Связанные подходящие компоненты, допустимая локальная композиция; нет квоты instances | Конкретные breakpoints, max-width semantics, Nuxt route groups |

## Что изменилось относительно архива

Старый пакет не содержал завершённых независимых DX-проб. Текущий
design-direction описывает частичные пробы Button и Card/Modal. Их не следует
переносить как доказательство всего workflow: у Button записан открытый дефект
геометрии кольца после изменения содержимого, runtime Modal не проверен.
AGENT_ROUTING_NOTES отдельно признаёт, что независимый consumer пропустил
положение Close и крестика. Поэтому независимость и визуальный просмотр
сохраняются как разные проверки.

Ресерч даёт девять наблюдений разных классов и пять pending cases; их
происхождение сохранено. Новая проба LeinoDesign имеет собственный отчёт
и не переписывает историю этих событий.

## Первая область проверки

Новый ReviewPanel в отдельном Figma-файле: свободное содержимое, редактируемые
текст и иконка, короткое/длинное наполнение, изменение ширины и общий master
edit. Исходные требования даны независимому агенту без истории Haulplane.
Это ограниченная forward-проба переносимости инструкции. Она не является
A/B benchmark и не доказывает экономию времени/токенов или универсальность.

Публикация, установка навыка, смена источника истины Haulplane, Code Connect,
генератор токенов, frontend runtime и широкая библиотека не входят в этот черновик.
