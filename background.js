/**
 * Service worker — runs the launcher-URL heal on install, update, and
 * browser startup so users don't need to open the popup for their
 * bookmarks to self-repair after uninstall/reinstall (which invalidates
 * the chrome-extension://<id>/launcher.html URL).
 */
import { healOrphanedLaunchers } from './lib/launcher.js';

async function runHeal(trigger) {
  try {
    const count = await healOrphanedLaunchers();
    if (count > 0) {
      console.info(`[Bookmark Icon Customizer] ${trigger}: restored ${count} bookmarklet(s) whose custom icons were lost.`);
    }
  } catch (e) {
    console.error(`[Bookmark Icon Customizer] heal failed (${trigger}):`, e);
  }
}

chrome.runtime.onInstalled.addListener(() => runHeal('onInstalled'));
chrome.runtime.onStartup.addListener(() => runHeal('onStartup'));
