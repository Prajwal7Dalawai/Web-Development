/* So, here I am going to design a tic tac toe game.
T
he following steps need to be considered in the view of designing the game.:
1.Creating a 2 dimensional array of the order 3 x 3.
2.Taking the input form the user at the blank spaces.
3.Taking input of the unique serial numbers.
4.Assigning the value of each number to the locationn of the matrix with correspondence to the user.
5. Checking if there are three consecutive similar character vertically, horizontally, and diagonally.
6.Terminating the program when the above condition satifies.
7.Decalaring as a draw if none of the conditions satifies.*/
#include<stdio.h>
int horizontal_check(int *a[3])
{
    int done=0;
   for(int i=0;i<3;i++)
   {
    if(a[i][0]==a[i][1]==a[i][2])
   {
    done=1;
    break;
   }
   }
   if(done==1)
   return 1;
   else 
   return 0;
}

int vertical_check(int *a[3])
{
    int done=0;
for(int i=0;i<3;i++)
{
    if(a[0][i]==a[1][i]==a[2][i])
    {
    done=1;
    break;
    }
}
if(done==1)
   return 1;
   else 
   return 0;
}

int daigonal_check(int *a[3])
{
    int i=0;
    if(a[0][0]==a[1][1]==a[2][2] || a[0][2]==a[1][1]==a[2][0])
    {
    return 1;
    }
    else 
    return 0;
}




int main()
{
    int a[3][3],i,n,b[9];
    printf("INSTRUCTIONS FOR INPUTS!!\nFor matrix places:-\n(0,0)=1\n(0,1)=2\n(0,2)=3\n(1,0)=4\n(1,1)=5\n(1,2)=6\n(2,0)=7\n(2,1)=8\n(2,2)=9\n");
    for(i=0;i<9;i++)
    { 
        if((i%2)==0)
        {
            printf("User 1:");
           read: {scanf("%d",n);}
            if(n>9)
            {
                printf("Invalid input, read again.\n");
                goto read;
            }
            n=b[i];
            for (int j = 0; j < i; j++)
            {
                if (b[j]==n)
                {
                  printf("The number has been already entered by you or the other user, please enter the number again.\n"); 
                  break;
                  goto read;
                }  
            }
            switch (n)
            {
                case 1: a[0][0]=1;break;
                case 2: a[0][1]=1;break;
                case 3: a[0][2]=1;break;
                case 4: a[1][0]=1;break;
                case 5: a[1][1]=1;break;
                case 6: a[1][2]=1;break;
                case 7: a[2][0]=1;break;
                case 8: a[2][1]=1;break;
                case 9: a[2][2]=1; break;
                default: break;
            }
            horizontal_check(a);
            vertical_check(a);
            daigonal_check(a);
               if(vertical_check(a)==1 || horizontal_check(a)==1 || daigonal_check(a)==1)
            {
                printf("User 1 won the match.\n");
                break;
            }
        }
        else
        {
            printf("User 2:");
           read1:{ scanf("%d",n);}
             if(n>9)
            {
                printf("Invalid input, read again.\n");
                goto read1;
            }
            n=b[i];
            for (int j = 0; j < i; j++)
            {
                if (b[j]==n)
                {
                  printf("The number has been already entered by you or the other user, please enter the number again.\n");
                  goto read1; 
                }  
            }
             switch (n)
            {
                case 1: a[0][0]=2;break;
                case 2: a[0][1]=2;break;
                case 3: a[0][2]=2;break;
                case 4: a[1][0]=2;break;
                case 5: a[1][1]=2;break;
                case 6: a[1][2]=2;break;
                case 7: a[2][0]=2;break;
                case 8: a[2][1]=2;break;
                case 9: a[2][2]=2; break;
                default: break;
            }
            horizontal_check(a);
            vertical_check(a);
            daigonal_check(a);
            if(vertical_check(a)==1 || horizontal_check(a)==1 || daigonal_check(a)==1)
            {
                printf("User 2 won the match.\n");
                break;
            }
        }
    }
     if(vertical_check(a)!=1 && horizontal_check(a)!=1 && daigonal_check(a)!=1)
    printf("Match is drawn.\n");
    return 0;
}