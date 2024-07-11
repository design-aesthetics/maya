import os
from datetime import datetime
import instaloader
import logging
import lzma
import json

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger("instaloader")
logger.setLevel(logging.DEBUG)

# Initialize InstaLoader
L = instaloader.Instaloader()

# Specify the username
USERNAME = "mayaaesthetics"

# Specify the save directory
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, "..", "..", ".."))
SAVE_DIR = os.path.join(PROJECT_ROOT, "storage", "app", "public", "instagram")

# Change the working directory to the SAVE_DIR
os.chdir(SAVE_DIR)


def decrypt_xz_file(file_path):
    with lzma.open(file_path, "rt", encoding="utf-8") as file:
        return json.load(file)


try:
    # Ensure the save directory exists
    os.makedirs(SAVE_DIR, exist_ok=True)

    # Get the profile
    profile = instaloader.Profile.from_username(L.context, USERNAME)

    # Get the posts
    posts = profile.get_posts()

    # Download the last 12 posts
    for index, post in enumerate(posts):
        if index >= 12:
            break
        print(f"Downloading post from {post.date}")

        # Create a subdirectory for each post
        post_dir = post.date.strftime("%Y%m%d_%H%M%S")
        os.makedirs(post_dir, exist_ok=True)

        # Download the post to the specific directory
        L.download_post(post, target=post_dir)

        print(f"Post saved in: {os.path.join(SAVE_DIR, post_dir)}")

        # Decrypt the JSON.xz file
        xz_file = os.path.join(
            post_dir, f"{post.date.strftime('%Y-%m-%d_%H-%M-%S')}_UTC.json.xz"
        )
        if os.path.exists(xz_file):
            try:
                json_data = decrypt_xz_file(xz_file)
                # Save decrypted JSON
                with open(xz_file[:-3], "w", encoding="utf-8") as f:
                    json.dump(json_data, f, ensure_ascii=False, indent=2)
                print(f"Decrypted JSON saved as: {xz_file[:-3]}")
            except Exception as e:
                print(f"Error decrypting {xz_file}: {str(e)}")

    print(f"Successfully downloaded the last 12 posts from {USERNAME}")

except instaloader.exceptions.ProfileNotExistsException:
    print(f"The profile {USERNAME} does not exist.")
except Exception as e:
    print(f"An error occurred: {str(e)}")

print(f"Files should be saved in: {SAVE_DIR}")
