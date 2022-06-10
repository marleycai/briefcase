#ifndef Folder_HPP
#define Folder_HPP
#include <iostream>
#include <vector>
#include <algorithm>
#include <IComposableOfListable.hpp>
#include <IListable.hpp>



class Folder : public IListable , public IComposableOfListable
{
    private:
        std::string m_nodename;
        std::vector<IListable*> m_children;

    public:
        Folder(std::string nodeName);
        
       
         void list(int depth);
         void add (IListable* component);
         void remove (IListable* component);   
          virtual ~Folder(){}
};
#endif