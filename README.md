# Class 17 starting project

This folder is where everyone starts. It begins **Class 17 — Part 1: Your First Component**.

**Where you left off.** This is the Events page from Classes 2 and 5, written as JSX. The invitation panel from Class 5 is not in it yet. Part 7 brings it back as each event's own page.

**Set up once:** in StackBlitz, create a new **React JavaScript** project of your own (New project → Frontend → React JavaScript). Then replace what it starts with:

1. Open `Part 1 start — Your First Component` in Finder, select everything inside it, and drag it onto the project's file list, at the top level. Not onto a folder: if the files land inside another folder, the preview can't find them.
2. If StackBlitz asks, choose to replace the files.
3. Click Save at the top left of StackBlitz. Then reload the whole browser tab (Cmd+R on a Mac, Ctrl+R on Windows). StackBlitz installs what the project needs, and the preview shows the Events page you built in Classes 2 and 5.

Keep this instructions page open in a browser tab. From here on you work in `src`, in your own project.

## What is already here

- `index.html` has one empty `<div id="root">`. React draws the whole page inside it. You never edit this file.
- `main.jsx` starts React and puts `<App />` on the page. You never edit this file either.
- `App.jsx` is the Events page from Class 5, written as JSX. It is one big component. Look at it before you change it.
- `styles.css` is the same stylesheet as Class 5, unchanged.

## What changed between HTML and JSX

JSX is HTML written inside JavaScript, with a few spelling changes because some HTML words are already taken in JavaScript.

- `class="…"` is now `className="…"`, because `class` is a JavaScript keyword.
- `datetime="…"` on `<time>` is now `dateTime="…"`.
- Every `<img … />` closes itself. HTML forgave a missing `/`; JSX does not.
- A comment inside JSX is `{/* like this */}`, not `<!-- like this -->`.
- A component returns one element. `App` returns `<>…</>`, an empty wrapper called a fragment, so the header and the main section can sit side by side.

## Your next task — Part 1: Your First Component

Take the first event card out of `App.jsx` and make it a component of its own, `EventCard`, in its own file. For now it always shows the same event. The page must look exactly the same afterwards. The goal is to see that a component is a function that returns a piece of the page, and that a page is made by calling those functions.

**Done when:** `src/components/EventCard.jsx` exists, `App.jsx` imports it and uses `<EventCard />` once where the first card was, and the page looks exactly as it did.

### Additional reading: think before coding

- Find the three `<article className="timeline-event-card">` blocks in `App.jsx`. Which lines belong to the first card, and which lines belong to the day label around it?
- A component is a JavaScript function that returns JSX. What has to be true about its name for React to treat it as a component rather than an HTML tag?
- `App` can only use `EventCard` if it can see it. Which two lines connect the two files, and which file does each line go in?
- If the page looks the same after the change, how will you prove to yourself that the component is really being used?

**Read more:** [Your First Component](https://react.dev/learn/your-first-component), in the official React guide.

### How to approach it

1. Make a folder `src/components`, and in it a file `EventCard.jsx`.
2. In that file, write a function named `EventCard` that returns the first card's `<article>…</article>` block. Cut the block from `App.jsx` and paste it inside the `return ( … )`. Export the function as the default export.
3. In `App.jsx`, where the block used to be, write `<EventCard />`.
4. At the top of `App.jsx`, import `EventCard` from `./components/EventCard.jsx`.
5. Save, and check the preview. Then change one word in `EventCard.jsx`, save, and watch the page change. Change it back.

<details>
<summary><strong>Exact code</strong> — open this only if you are still stuck after trying</summary>

`src/components/EventCard.jsx`, a new file. The `<article>` block is the first card from `App.jsx`, unchanged:

```jsx
// Part 1: the first card, now a component of its own.
// For now it always shows the same event. Part 2 makes it take props.

export default function EventCard() {
  return (
    <article className="timeline-event-card" id="event-studio-night">
      …the whole first card, exactly as it was in App.jsx…
    </article>
  );
}
```

**What this code does.** `export default function EventCard()` defines a component: a function whose name starts with a capital letter and that returns JSX. `export default` makes it the thing another file gets when it imports this file. The `return ( … )` wraps the JSX so it can run over several lines.

In `App.jsx`, the first line of the file:

```jsx
import EventCard from "./components/EventCard.jsx";
```

And where the first `<article>…</article>` block was, inside the first `event-day-group`:

```jsx
<EventCard />
```

**What this code does.** The `import` line gives this file a name, `EventCard`, for whatever the other file exported by default. `<EventCard />` calls that function and puts what it returns at this spot in the page. The capital letter is how JSX knows this is a component and not an HTML tag.

The complete files are in the next folder, `Part 2 start — Props`.

</details>

## Success check

The preview looks exactly as it did before. `App.jsx` is shorter by one card, and `src/components/EventCard.jsx` exists and is used once. Changing a word in `EventCard.jsx` changes the page. Point to the function, the `export`, the `import` and the `<EventCard />` tag, and say what each one does.

## Points

What this Part earns in Individual Assignment 3 is in the table in the top-level `README.md` of the zip, and in the assignment itself.
