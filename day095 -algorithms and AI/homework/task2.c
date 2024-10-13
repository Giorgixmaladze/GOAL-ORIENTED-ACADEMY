#include <stdio.h>

int main( )
{
    int c, last_c;

    last_c = 0;

    while ((c = getchar()) != EOF)
    {
        if (c != ' ' || last_c != ' '){
            printf("%c", c);
        }
        last_c = c;
    }

    return 0;
}