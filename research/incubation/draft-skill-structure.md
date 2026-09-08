# Возможная структура skill — DRAFT ONLY

Это эскиз ответственности для будущего extraction. **Не production SKILL.md, не инструкция, которую следует устанавливать или выполнять сегодня.** Он не объявляет метод portable/qualified и не меняет canonical source Haulplane.

## Если freeze будет принят

```text
skills/
  design-system/
    SKILL.md                 # будущий короткий entrypoint, сейчас отсутствует
    references/
      evidence-and-acceptance.md
      component-boundaries.md
      product-content.md
adapters/
  figma/
    component-contract.md
    consumer-operations.md
    file-ownership.md
  vue-storybook/
    contracts-and-states.md
    implementation-acceptance.md
evals/
  catalog.md
  pending-cases.md
evidence/
  haulplane/
    source-register.md
    source-manifest.json
```

Создавать эти директории и заполнять entrypoint сейчас не требуется. Token bridge, Code Connect, exporter и provider runtime не добавляются заранее. Если узкий v0 их не обещает, ссылки на экспериментальные Haulplane recipes достаточны.

## Предлагаемые обязанности

| Часть | Что могла бы содержать | Чего недостаточно для включения сегодня |
|---|---|---|
| Core entrypoint | Выбор конкретного design/consumer scenario, требуемых evidence и соответствующего adapter | Ещё нет независимого применения извлечённого draft |
| Evidence and acceptance | Разделение наблюдения/предложения и technical/UX/DX/implementation claims; ссылки на негативные сценарии | Нельзя объявить весь Haulplane workflow проверенным |
| Component boundaries | Intended common/local changes и consumer operations вместо автоматических правил по имени/повторению | Нужна P-05 mutation-проба; нет основания обязательного общего shell |
| Product content | Отделение авторских заметок от пользовательских данных, действий и ограничений | E-02 подтверждён на Haulplane; общий приём ещё promotion candidate |
| Figma adapter | Slot/fallback, properties, master/instance, реальные операции и ограничения инструмента | P-01/02/03, publish/import и version-specific capability evidence не закрыты |
| Vue/Storybook adapter | Существующие props/slots/style branches, declared design delta, отдельные stories и browser acceptance | Handoff snapshot и end-to-end применение пока отсутствуют |

## Project inputs вместо вшитого Haulplane

Будущий draft должен получать явные ссылки на продуктовый сценарий, язык текста, контракт/его статус, владельца design decisions, источник принятых токенов, файлы продукта/библиотеки, supported widths и локальную политику экспорта. Это перечень обнаруженных зависимостей, не предложение нового config framework.

Не вшивать имя Haulplane, Figma keys, пути Windows, model IDs, количество токенов, английский язык, light-only, 1920/1440, обязательный SCSS source или запрет продуктовых компонентов. Не переносить доменные правила ETA/approval в generic skill.

До freeze: любое изменение текущей методики делается и проверяется в Haulplane по отдельной задаче. LeinoDesign получает наблюдения и обновлённую карту, а не конкурирующий operational SKILL.md.
