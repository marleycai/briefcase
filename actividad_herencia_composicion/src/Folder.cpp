#include <Folder.hpp>

Folder::Folder(std::string nodeName)
{
    m_nodename = nodeName;
}

 void Folder::list(int depth)//operation
        {
            std::string newStr(depth, '-');
            std::cout << newStr << m_nodename << " depth: " << depth << std::endl;

            for(IListable* currentChild :  m_children)
            {
                if(currentChild != 0)
                {
                    currentChild->list(depth + 1);
                }
            }
        }

void Folder::add(IListable* component)
        {
            m_children.push_back(component);
        }

void Folder::remove(IListable* component)
        {
            m_children.erase(std::remove(m_children.begin(), m_children.end(), component), m_children.end());
        }