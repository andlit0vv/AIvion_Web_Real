# AIvion Web (React + Vite)

Это одностраничный сайт на **React + TypeScript + Vite + Tailwind**.

## Почему на GitHub Pages была пустая страница

Вы выбрали **Deploy from a branch → main → /(root)**.
В таком режиме GitHub Pages отдает исходный `index.html` из корня репозитория.

В корневом `index.html` подключается файл разработки:

```html
<script type="module" src="/src/main.tsx"></script>
```

Браузер на Pages не умеет напрямую исполнять `tsx` и импорты из исходников как в dev-сервере Vite — поэтому страница выглядит пустой.

## Самый простой запуск локально

Требования:
- Node.js 20+
- npm

Команды:

```bash
npm install
npm run dev
```

Открыть: `http://localhost:5173`

## Сборка production-версии

```bash
npm run build
npm run preview
```

Готовый сайт лежит в папке `dist/`.

## Самый простой деплой на GitHub Pages (без ручной возни)

В репозиторий добавлен workflow `.github/workflows/deploy-pages.yml`.
Он автоматически:
1. ставит зависимости,
2. собирает проект (`npm run build`),
3. публикует `dist/` в GitHub Pages.

### Что сделать в настройках GitHub

1. Откройте **Settings → Pages**.
2. В разделе **Build and deployment** выберите **Source: GitHub Actions**.
3. Убедитесь, что workflow **Deploy Vite site to GitHub Pages** успешно прошел в табе **Actions**.

После этого сайт будет открываться по адресу вида:

`https://<ваш-username>.github.io/<имя-репозитория>/`

---

## Структура проекта

- `index.html` — HTML-шаблон точки входа.
- `src/main.tsx` — точка входа React-приложения.
- `src/App.tsx` — сборка секций страницы.
- `src/sections/*` — секции лендинга (Hero, Process, Growth, Team, Solutions, Services, Header, Modal).
- `src/components/ui/*` — переиспользуемые UI-компоненты.
- `src/hooks/*` — пользовательские хуки.
- `vite.config.ts` — конфигурация Vite.
- `.github/workflows/deploy-pages.yml` — автодеплой в Pages.
