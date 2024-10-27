#include <stdio.h>
int main(){
    int c,blank,tab,nl;
    blank = tab = nl = 0;
    while((c = getchar()) != EOF){
        if(c == ' '){
            ++blank;
        }
        if(c == '\t'){
            ++tab;
        }
        if(c == '\n'){
            ++nl;
        }
    }
    printf("\n blanks: %d, tab: %d, lines: %d",blank,tab,nl);
}