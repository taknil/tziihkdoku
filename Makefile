PANDOC = pandoc
 
%.html: %.md style.css Makefile
    $(PANDOC) -c style.css -s -f markdown -t html --standalone -o $@ $<
 
%.odt: %.md Makefile
    $(PANDOC) --standalone -f markdown -t odt -o $@ $<
 
%.epub: %.md Makefile
    $(PANDOC) -o $@ $<
 
%.pdf: %.md Makefile
    $(PANDOC) --latex-engine xelatex \
    -V lang=german \
    -V mainfont='Source Sans Pro' \
    -V date='' \
    -V fontsize='11pt' \
    -o $@ $<
 
%.tex: %.md Makefile
    $(PANDOC) --latex-engine xelatex \
    -V lang=german \
    -V mainfont='Source Sans Pro' \
    -V date='' \
    -V fontsize='11pt' \
    -o $@ $<
 
all: doc.html doc.odt doc.pdf



clean:
    rm -f *.{html,odt,epub,pdf}