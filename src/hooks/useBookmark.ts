import { useState, useEffect } from 'react';

const BOOKMARK_STORAGE_KEY = 'technyan-bookmarks';

interface BookmarkData {
  articleSlug: string;
  bookmarkedAt: string;
}

interface BookmarkStorage {
  bookmarks: BookmarkData[];
}

export function useBookmark(articleSlug: string) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // localStorageから全ブックマークを取得
  const getBookmarks = (): BookmarkData[] => {
    if (typeof window === 'undefined') return [];

    try {
      const stored = localStorage.getItem(BOOKMARK_STORAGE_KEY);
      if (!stored) return [];

      const data: BookmarkStorage = JSON.parse(stored);
      return data.bookmarks || [];
    } catch (error) {
      console.error('Failed to load bookmarks:', error);
      return [];
    }
  };

  // localStorageにブックマークを保存
  const saveBookmarks = (bookmarks: BookmarkData[]): void => {
    if (typeof window === 'undefined') return;

    try {
      const data: BookmarkStorage = { bookmarks };
      localStorage.setItem(BOOKMARK_STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Failed to save bookmarks:', error);
    }
  };

  // 初期化：ブックマーク状態を確認
  useEffect(() => {
    const bookmarks = getBookmarks();
    const isCurrentlyBookmarked = bookmarks.some(
      (bookmark) => bookmark.articleSlug === articleSlug
    );
    setIsBookmarked(isCurrentlyBookmarked);
    setIsLoading(false);
  }, [articleSlug]);

  // ブックマークを追加
  const addBookmark = (): void => {
    const bookmarks = getBookmarks();

    // 既にブックマークされていないか確認
    const alreadyBookmarked = bookmarks.some(
      (bookmark) => bookmark.articleSlug === articleSlug
    );

    if (!alreadyBookmarked) {
      const newBookmark: BookmarkData = {
        articleSlug,
        bookmarkedAt: new Date().toISOString(),
      };

      const updatedBookmarks = [...bookmarks, newBookmark];
      saveBookmarks(updatedBookmarks);
      setIsBookmarked(true);
    }
  };

  // ブックマークを削除
  const removeBookmark = (): void => {
    const bookmarks = getBookmarks();
    const updatedBookmarks = bookmarks.filter(
      (bookmark) => bookmark.articleSlug !== articleSlug
    );

    saveBookmarks(updatedBookmarks);
    setIsBookmarked(false);
  };

  // ブックマークのトグル
  const toggleBookmark = (): void => {
    if (isBookmarked) {
      removeBookmark();
    } else {
      addBookmark();
    }
  };

  return {
    isBookmarked,
    isLoading,
    addBookmark,
    removeBookmark,
    toggleBookmark,
  };
}

// 全ブックマークを取得するユーティリティ関数
export function getAllBookmarks(): BookmarkData[] {
  if (typeof window === 'undefined') return [];

  try {
    const stored = localStorage.getItem(BOOKMARK_STORAGE_KEY);
    if (!stored) return [];

    const data: BookmarkStorage = JSON.parse(stored);
    return data.bookmarks || [];
  } catch (error) {
    console.error('Failed to load bookmarks:', error);
    return [];
  }
}

// ブックマーク数を取得するユーティリティ関数
export function getBookmarkCount(): number {
  return getAllBookmarks().length;
}
