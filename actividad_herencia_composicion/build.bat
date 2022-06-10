:: Compilo código objeto
g++ -Wall -std=c++11 -I.\include\ -c .\src\Folder.cpp
g++ -Wall -std=c++11 -I.\include\ -c .\src\File.cpp
g++ -Wall -std=c++11 -I.\include\ -c main.cpp

:: Enlazo y genero el binario
g++ Folder.o File.o main.o -o composite.exe

:: Limpio los códigos objeto
DEL .\*.o