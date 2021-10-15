# This script is here to test the changes made locally. These commands are
# duplicated in the github actions to update the README automatically.
#
# Paths are relative and assume that the script is run from the root directory
# of the project.

# Write the Header of the Readme File
cat utils/README_head.md > README.md

# Write the markdown apps table
node utils/genMarkdown.js >> README.md

# Write the tail end of the Readme File
cat utils/README_tail.md >> README.md
