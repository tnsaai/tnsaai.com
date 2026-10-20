// The site follows the system theme unless a visitor overrides it with the nav toggle.
// The override lives in localStorage and on <html data-theme="light|dark">.
export const THEME_STORAGE_KEY = 'tnsa-theme'

// Inlined in <head> so a stored theme applies before first paint (no flash).
export const themeInitScript = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t)}}catch(e){}})()`
