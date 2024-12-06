# React 19 Suspense and React Query Integration Issue
This repository demonstrates a problem integrating React 19's Suspense component with TanStack's React Query library.  The Suspense fallback UI is not displayed while React Query is fetching data, resulting in a brief period of a blank screen before the data is loaded.

## Problem Description
The issue lies in how Suspense and React Query interact. While Suspense is designed to handle asynchronous operations, it doesn't always correctly identify React Query's loading state as a reason to render the fallback UI.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe that there's a brief flash of a blank screen before the data from `/api/data` is displayed. The `Loading...` fallback provided by Suspense is not shown during the initial data fetching phase.

## Solution
The solution involves ensuring that React Query's loading state is properly handled by Suspense. This often requires restructuring your component or using specific React Query features designed for Suspense integration.