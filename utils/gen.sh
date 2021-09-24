# This script is here to test the changes made locally. These commands are
# duplicated in the github actions to update the README automatically.
#
# Paths are relative and assume that the script is run from the root directory
# of the project.
cat utils/README_head.md > README.md
node utils/gen.js >> README.md
cat utils/README_tail.md >> README.md