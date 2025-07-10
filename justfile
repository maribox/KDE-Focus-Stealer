default:
    just --choose

install:
	kpackagetool6 --type=KWin/Script --install=. || kpackagetool6 --type=KWin/Script --upgrade=.

uninstall:
	kpackagetool6 --type=KWin/Script --remove=KDE-Focus-Stealer

reload:
    qdbus6 org.kde.KWin /Scripting unloadScript "KDE-Focus-Stealer"
    qdbus6 org.kde.KWin /Scripting start