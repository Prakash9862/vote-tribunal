import qrcode

# Ton lien GitHub Pages
url = "https://prakash9862.github.io/vote-tribunal/"

# Génération du QR code
qr = qrcode.make(url)

# Sauvegarde du QR Code dans le dossier actuel
qr.save("qr_vote_tribunal.png")

print("✅ QR Code généré avec succès ! Va voir le fichier 'qr_vote_tribunal.png'")
