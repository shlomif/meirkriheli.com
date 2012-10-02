NAME=sphinx
python rst-directive.py \
    --stylesheet=pygments.css \
    ${NAME}.rst > ${NAME}.html
