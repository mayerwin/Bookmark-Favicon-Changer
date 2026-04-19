/**
 * Storage wrapper for per-URL custom bookmark icons.
 *
 * Chrome's favicon cache is keyed by page URL, so we mirror that: one mapping
 * per URL. Two bookmarks pointing at the same URL share the same icon — which
 * matches Chrome's own behavior and keeps the model honest.
 */
const STORAGE_KEY = 'bookmark_icons';

const StorageService = {
  async getMappings() {
    const data = await chrome.storage.local.get(STORAGE_KEY);
    return data[STORAGE_KEY] || {};
  },

  async saveMapping(url, mapping) {
    const mappings = await this.getMappings();
    mappings[url] = { ...mapping, updatedAt: Date.now() };
    await chrome.storage.local.set({ [STORAGE_KEY]: mappings });
  },

  async removeMapping(url) {
    const mappings = await this.getMappings();
    delete mappings[url];
    await chrome.storage.local.set({ [STORAGE_KEY]: mappings });
  },

  async getUsage() {
    return new Promise(resolve => {
      chrome.storage.local.getBytesInUse(null, bytes => resolve(bytes));
    });
  }
};

export default StorageService;
