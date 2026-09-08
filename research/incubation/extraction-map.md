# Extraction map

Статус: incubation, baseline `7fa5718`. **Ни одна строка этой карты не объявляет новое universal rule.** «Universal design-system core» ниже обозначает предполагаемое место ответственности; зрелость отмечается отдельно. Все предложения обобщения — promotion candidates.

Ссылки R/S раскрыты в [реестре evidence](evidence/source-register.md). Источник истины для работы над Haulplane остаётся там же; эта карта не копия operational harness.

## Классификация правил и материалов

| ID | Материал / правило | Класс извлечения | Что подтверждено | Что переносить сегодня / статус |
|---|---|---|---|---|
| C-01 | Проверять ожидаемое значение/связь, а не наличие свойства; negative controls | **Universal design-system core** | R-08: локальные ворота пропускали неверную привязку, несвязанное свойство и неверное исключение | E-04 как наблюдавшийся дефект проверки. Обобщение на дизайн-артефакты — promotion candidate; JS-реализация остаётся adapter |
| C-02 | Различать техническую корректность, качество продукта, DX и связь с реализацией | **Universal design-system core** | R-02/R-03: реальные дефекты после сборки; независимые UX/DX остаются открыты. R-01 разделяет группы evidence | Переносить границу доказательств. Не утверждать, что полный green-live прогон уже был. Promotion candidate, P-04 |
| C-03 | Отделять research/author notes от product copy | **Universal design-system core** | R-02/R-07: первый экран не принят, пояснения повлияли на композицию | E-02. Переносить наблюдение и смысловую проверку; не запрет подсказок вообще. Promotion candidate |
| C-04 | Выбирать public/private/local по владельцу изменения и операциям потребителя | **Universal design-system core** | R-03: чрезмерный запрет по форме props переделан; R-10: навигация референса разошлась при локальном повторении | E-08/E-09, но common/local mutation test Haulplane не выполнен. Promotion candidate, P-05 |
| C-05 | Потребитель без истории автора; сохранение overrides после master change | **Universal design-system core** | R-06 предписывает; R-02 фиксирует отсутствие независимой DX | Переносить только список неизвестного P-02/P-03 и дизайн будущей пробы. Не verified reusable method |
| C-06 | Принятый дизайн отличать от работающего template default; исследование от хранения принятого | **Universal design-system core** | R-01/R-02: SCSS существует, но палитра/типографика остаются кандидатами | Термины и наблюдаемое различие; весь lifecycle — promotion candidate. Полного принятия → переноса → повторного изменения нет |
| C-07 | Документация и acceptance claims должны соответствовать артефакту | **Universal design-system core** | R-11: Properties drift, пустые descriptions; R-03: частичная готовность прямо обозначена | Сохранить reference observations с происхождением. Конкретный page template и эмодзи сюда не входят |
| F-01 | Нативный SlotNode, slotContentId, default content, canvas ownership | **Figma adapter** | R-04/R-11 различают SLOT/FRAME; R-03/S-03 подтверждают работающий CSV и отдельный дефект фона | Наблюдения E-01/E-05; ownership probe P-01 остаётся unqualified. Type-only проверка R-08 не доказывает ownership |
| F-02 | Видимость fallback и slot region — разные операции | **Figma adapter**, контракт на границе Vue | R-03: скрытие всего Slot вместо fallback; R-05: sideIcon условен только в fallback; S-01/S-02: промежуточная геометрия | E-01. Не превращать ShowSide workaround в universal property; полная правда определяется consumer contract |
| F-03 | TEXT/BOOLEAN/INSTANCE_SWAP/SLOT/exposed properties | **Figma adapter** | R-04: схема; S-04: expose внутри Slot завершился ошибкой в конкретной сессии | Историческая capability note; перечень возможностей и версии надо подтвердить при будущем replay. Не instruction для всех Figma API навсегда |
| F-04 | Auto-layout, fill/hug, loader constraints, прозрачность Slot, gap | **Figma adapter** | R-03: root исправлял double gap, loader resize, непрозрачный Slot | E-05/E-06/E-07. Конкретные способы настройки — promotion candidates до независимого повторения |
| F-05 | Variables scopes, codeSyntax, token binding, styles | **Figma adapter** | R-11: наблюдались ALL_SCOPES, пустой codeSyntax, radius из spacing; R-02: засев выполнен | Переносить findings и спецификации проверок. Точное множество scopes на роль и syntax strings принадлежат адаптеру проекта |
| F-06 | Страницы документации, generated Properties, статусы страниц | **Figma adapter** | R-11 и file-and-docs: ручные Properties расходились с master; статусы референса конфликтовали | Связь с машинно-читаемым contract — candidate; один компонент/страница, emoji и геометрия панелей не универсальны |
| F-07 | Продуктовый файл отдельно от библиотеки; межфайловое потребление | **Figma adapter** + Haulplane policy | R-02/R-09/S-05: неверное размещение; импорт неопубликованного header failed; перенос открыт | E-03. Извлекаемый candidate: доступность инструмента не определяет ownership. Правило ровно двух файлов остаётся Haulplane |
| F-08 | Snapshot, публикация, import и Code Connect | **Figma adapter** | R-13: публикации и snapshot нет; R-02: конкретный import failed | Блокер workflow, не verified recipe. Snapshot version discipline — candidate; Code Connect end-to-end не qualified |
| V-01 | Vue props vs slots, fallback sideIcon, defineModel, BEM attribute branches | **Vue/Storybook adapter** | R-05 — код; R-04 — соответствие. Текущий code contract не означает принятый visual design | Переносить небольшой контрактный пример с origin, не весь Button и не Haulplane API как generic surface |
| V-02 | Вывод независимых осей из конкретных selectors | **Vue/Storybook adapter**; семантический принцип — core candidate | R-04: сосуществующие состояния и реальные исключения; R-08: negative examples | Не копировать одну State-ось на все компоненты; парсер и fixture suite пока versioned Haulplane recipe |
| V-03 | SCSS extraction → TOKENS → Figma; ONLY/accepted.json/hash | **Vue/Storybook adapter** + Figma bridge | R-12: подробный алгоритм; R-02: выполнен только засев и предложения, accepted transfer не выполнен | Сохранить ссылку и незакрытый lifecycle. SCSS как authoritative store не universal core |
| V-04 | Истории всех style branches, переходы, визуальная сверка с snapshot | **Vue/Storybook adapter** | storybook.md содержит recipe; R-13 — snapshot not captured | Candidate, нужны живой handoff и browser acceptance. Успешная сборка документации не подтверждает этот pipeline |
| V-05 | Breakpoints max-width, shared JSON, размеры Modal | **Vue/Storybook adapter** | R-15 выводит значения из кода | Направление медиазапроса — факт конкретной реализации. Числа, список тиров и 1920/1440 не переносить в core |
| H-01 | English product copy, Russian docs | **Haulplane-specific product policy** | Принято владельцем, design-direction «Язык макетов» | Остаётся Haulplane. C-03 не требует английского языка |
| H-02 | Dispatcher flow, ETA, plan/actual/projected/proposed, stale, severity, approve/publish | **Haulplane-specific product policy** | design-method ссылается на UX/MVP/frontend-delivery; ряд порогов не определён | В corpus допускается минимальный пример, но не generic domain grammar. Не выводить policy из визуального паттерна |
| H-03 | 48 цветов, 19 стилей, 15 spacing, 4 radius; light-only, плотность, иконки | **Haulplane-specific product policy** | R-02: часть foundations candidate, light-only принято, иконки/плотность открыты | Числа и token names оставить в проекте. Не переносить как «проверенную шкалу» |
| H-04 | Product presentation shape разрешён в packages/components | **Haulplane-specific product policy** | R-14: ADR-0012 accepted | Остаётся Haulplane; не вводить обратный generic запрет по аналогии с разделением Figma-файлов |
| H-05 | Владелец принимает design-direction, публичные exports, публикацию | **Haulplane-specific product policy** | R-01, ADR-0012/0013, AGENTS | Конкретные approval gates остаются проектными. LeinoDesign не получает полномочия менять их |
| O-01 | Выбор model/effort, root/children, подписка, CLI flags, timeout, лимит MCP | **Provider/orchestration concern** | R-16/R-03: запуски и root-переделки | Не включать в дизайн-метод. Сохранить только provenance эксперимента, если оно влияет на воспроизведение |
| O-02 | Обязательный skillNames, entrypoint клиента, scratchpad/session resume, desktop fallback | **Provider/orchestration concern** + Figma tool integration | R-01: инструкции инструмента; R-02: MCP работает, browser transfer не сработал | Названия tools и клиентские paths не становятся generic core. Не обещать capability без фактической проверки |
| U-01 | Вся generic methodology portable/qualified | **Not yet empirically qualified** | Один незавершённый пилот + сторонний reference audit | Не извлекать production skill. Требуется ограниченная независимая проба, freeze и явное переключение источника |
| U-02 | Две ширины, «прищур», grayscale, второе применение, real data, domain UX | **Not yet empirically qualified** как общий метод | В harness описаны критерии; полной принятой пробы с domain user нет | Promotion candidates; не превращать размер набора, три ранга, один main-action или 1:1 вопрос→зона в universal laws |

## Границы переноса по файлам

| Текущий файл | Как разбирать |
|---|---|
| SKILL.md | Не копировать entrypoint. Разделить процесс, project permissions, adapters и evidence obligations по строкам C/F/V/H/O |
| design-method.md | C-02/03/04/05/06 и U-02; убрать Haulplane domain defaults из предлагаемого core, сохранив их в происхождении примеров |
| component-contract.md | F-01/02/03, V-01/02; public/private criterion — C-04; названия конкретных props не нормализовать до потери смысла |
| quality-gate.md | E-04 и границы доказательств уже переносимы. Исполняемые snippets оставить версиями адаптера, не выдавать их за generic runner |
| tokens.md | V-03/F-05; точные коллекции, counts, SCSS paths — H-03; qualified roundtrip отсутствует |
| screens.md | F-04/F-07, V-05 и H-02; inventory помогает ревью, не определяет правильную boundary |
| file-and-docs.md | F-06/F-07; двухфайловая структура и эмодзи — project conventions |
| principles.md + kosygin-evidence.md | Сохранять цепочку «наблюдение → вывод → применимость → неизвестное». Reference не превращать в стандарт; screenshots/полный сторонний файл не нужны для incubation |
| design-direction.md + docs/figma | Evidence pointers и незакрытое состояние. Не переносить живой decision ledger как новый параллельный источник |
| AGENT_ROUTING_NOTES.md | Дизайн-инциденты R-03 отделить от оценки исполнителя; из успешного/неуспешного вызова не выводить качество модели |

## Promotion candidates, для которых нужен следующий факт

| Candidate | Достаточное новое наблюдение в ограниченном срезе |
|---|---|
| C-01: семантические проверки вместо type/presence | Извлечённый проверяющий протокол отвергает сохранённые bad fixtures и принимает исправленные варианты; не требует знания Haulplane names |
| C-02/C-03: раздельная UX/DX-приёмка и продуктовый текст | Независимый reviewer применяет метод к переработанной композиции и фиксирует конкретные операции/понимание, включая допустимые предупреждения |
| C-04/C-05: boundary и change preservation | Потребитель без истории автора выполняет общее и локальное изменение, а text/swap/slot overrides сохраняются; ненужный public API не появляется |
| C-06: исследование vs accepted store | Полный scoped acceptance/transfer/change/rollback без затирания предложений вне scope |
| F-07: tooling не определяет ownership | Продуктовая композиция создана в продуктовом файле через подтверждённый канал; legacy-пробы больше не нужны как workaround |

Ни успех одного fixture, ни закрытие одного Button не повышают автоматически соседние строки карты. Отдельный второй проект может потребоваться для более широкого portability claim; он не является частью этой задачи.
