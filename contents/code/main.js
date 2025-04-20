function focusOnAttention(window) {
    window.demandsAttentionChanged.connect(() => {
        if (window.demandsAttention) {
          console.info("[KDE-Focus-Stealer] " + window.resourceName + " demands Attention. Focusing.")
          workspace.activeWindow = window
        }
    });
    if (window.demandsAttention) {
      workspace.activeWindow = window
    }
  }
  
  workspace.windowList().forEach(focusOnAttention);
  workspace.windowAdded.connect(focusOnAttention);
  